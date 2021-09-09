import 'package:over_react/over_react.dart';
part 'cell.over_react.g.dart';

mixin CellProps on UiProps {
  String value, adjacentBombs;
  bool isMine;
}

bool isFlaggedValue(String value) {
 return value == '⛳️';
}

UiFactory<CellProps> Cell = uiFunction(
  (props) {
    final isFlagged = useState(false);
    final cellValue = useState(props.value);

    void _handleFlaggedToggled() {
      if (isFlagged.value) {
        cellValue.set('⛳️');
      } else if (isFlaggedValue(cellValue.value) && !isFlagged.value) {
        cellValue.set(props.value);
      }
    }

    useEffect(() {
      _handleFlaggedToggled();
    }, [isFlagged]);

    void _onRightClick(e) {
      isFlagged.setWithUpdater((oldValue) => !oldValue);
      e.preventDefault();
    }

    void _loseGame() {
      isFlagged.set(false);
      cellValue.set('💥');
    }

    void _onClick(e) {
      isFlagged.set(false);
      if (props.isMine) {
        _loseGame();
        e.preventDefault();
      } else {
        cellValue.set(props.adjacentBombs);
      }
    }

    return (
      Dom.button()
        ..className = 'cell'
        ..onClick = ((e) => _onClick(e))
        ..onContextMenu = ((e) => _onRightClick(e))
      )(cellValue.value);
  },

  _$CellConfig, // ignore: undefined_identifier
);