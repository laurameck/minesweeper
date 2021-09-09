import 'dart:math';

import 'package:over_react/over_react.dart';

import 'cell.dart';
import 'game.dart';
import 'game_settings.dart';

part 'board.over_react.g.dart';

mixin BoardProps on UiProps {}

var boardSize = 0;
UiFactory<BoardProps> Board = uiFunction(
  (props) {
    final context = useContext(GameContext);
    final board = _generateBoardContent(context);

    final numBombs = context[bombCountKey].value;
    final safeCellsRemaining = useState(boardSize - numBombs);
    useEffect(() {
      safeCellsRemaining.set(boardSize - numBombs);
    }, [numBombs]);


    final boardRows = [];
    for (var row = 0; row < board.length; row++) {
      boardRows.add(
        (Dom.div()
          ..className = 'row'
          ..key='row$row'
        )(_getCells(board, row))
      );
    }

    return (Dom.div()..className = 'board')(boardRows);
  },

  _$BoardConfig, // ignore: undefined_identifier
);

final cellValKey = 'cellValue';
final cellMineKey = 'isMine';
final cellNeighborCountKey = 'neighborCount';

bool isMine(Map<String, String> cell) {
  return cell[cellMineKey] == 'true';
}

/// Returns a list of cells with the provided value from the given `board`
List _getCells(List<List<Map<String, String>>> board, int row) {
  final cellList = <ReactElement>[];
    for (var col = 0; col < board[row].length; col++) {
      final currentCell = board[row][col];
      final cellVal = currentCell[cellValKey];
      final neighborCount = currentCell[cellNeighborCountKey];

      cellList.add(
        (Cell()
          ..key = 'row$row-col$col'
          ..className ='row$row-col$col'
          ..value = cellVal
          ..isMine = isMine(currentCell)
          ..adjacentBombs = neighborCount
        )()
      );
    }
  return cellList;
}

/// Generates the 2D array for the board and plants the mines in random positions
List<List<Map<String, String>>> _generateBoardContent(context) {
  int rowCount, columnCount;
  if (context[difficultyKey] == DifficultyLevel.easy) {
    rowCount = 9;
    columnCount = rowCount;
  } else if (context[difficultyKey] == DifficultyLevel.medium) {
    rowCount = 16;
    columnCount = rowCount;
  } else if (context[difficultyKey] == DifficultyLevel.hard) {
    rowCount = 16;
    columnCount = 30;
  }
  boardSize = rowCount * columnCount;

  var board = List.generate(rowCount, (_) => List.generate(columnCount, (_) => {cellValKey: '🤷‍♀️', cellMineKey: 'false'}));
  board = _plantMines(context[bombCountKey].value, board, rowCount, columnCount);
  return _countNeighboringMines(board);
}

/// Plants mines at random spots throughout the board. Number of mines is based on difficulty level.
List<List<Map<String, String>>> _plantMines(int numBombs, List<List<Map<String, String>>> board, int rowCount, int colCount) {
  var minesAdded = 0;

  while(minesAdded < numBombs) {
    final randomNumber = Random().nextInt(15);
    final randomX = Random().nextInt(rowCount-1), randomY = Random().nextInt(colCount-1);
    if (randomNumber < 10 && !isMine(board[randomX][randomY])) {
      minesAdded++;
      board[randomX][randomY][cellMineKey] = 'true';
    }
  }

  return board;
}

/// Traverses the grid and assigns the neighboring mine count to each cell
List<List<Map<String, String>>> _countNeighboringMines(List<List<Map<String, String>>> board) {
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (isMine(board[i][j])) continue;

        _getMineCount(board, i, j);
      }
    }

  return board;
}

List<int> xDirection = [1, -1, 1, -1, 0, 0, 1, -1];
List<int> yDirection = [1, -1, -1, 1, 1, -1, 0, 0];

/// Assigns mine count to given cell
Map<String, String> _getMineCount(List<List<Map<String, String>>> board, int row, int col) {
      /*
        Count all the mines in the 8 adjacent
        cells

            N.W   N   N.E
              \   |   /
               \  |  /
            W----Cell----E
                 / | \
               /   |  \
            S.W    S   S.E

        Cell-->Current Cell (row, col)
        N -->  North        (row-1, col)
        S -->  South        (row+1, col)
        E -->  East         (row, col+1)
        W -->  West         (row, col-1)
        N.E--> North-East   (row-1, col+1)
        N.W--> North-West   (row-1, col-1)
        S.E--> South-East   (row+1, col+1)
        S.W--> South-West   (row+1, col-1)
        https://www.geeksforgeeks.org/cpp-implementation-minesweeper-game/
    */
    var bombCount = 0;
    // Check eight surrounding squares
    for (var i = 0; i < 8; i++) {
      final x = row + xDirection[i];
      final y = col + yDirection[i];
      if(x < 0 || y < 0 || x >= board.length || y >= board[0].length) continue;
      final currentCell = board[x][y];

      if (isMine(currentCell)) {
        bombCount++;
      }
    }

    board[row][col][cellNeighborCountKey] = '$bombCount';
    return board[row][col];
}