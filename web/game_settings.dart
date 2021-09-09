import 'dart:html';

import 'package:over_react/over_react.dart';

import 'game.dart';

part 'game_settings.over_react.g.dart';

const difficultyKey = 'difficulty';
const bombCountKey = 'bombCount';

extension EnumParsing on String {
  DifficultyLevel parseFromString() {
    if (this == 'Easy') {
      return DifficultyLevel.easy;
    }
    if (this == 'Medium') {
      return DifficultyLevel.medium;
    }
    if (this == 'Difficult') {
      return DifficultyLevel.hard;
    }

    throw UnimplementedError;
  }
}

final GameContext = createContext<Map>({difficultyKey: DifficultyLevel.easy, bombCountKey: 0});

mixin GameSettingsProps on UiProps {}

UiFactory<GameSettingsProps> GameSettings = uiFunction(
  (props) {
    final level = useState(DifficultyLevel.easy);
    final numBombs = useState(_getBombCount(level.value));

    useEffect(() {
      print(level.value);
      numBombs.set(_getBombCount(level.value));
    }, [level.value]);
    // This will be passed to any of `GameSettings` children
    final providerMap = {difficultyKey: level.value, bombCountKey: numBombs};

    void _changeDifficulty(event) {
      // Target value comes through as dynamic but will cast to a string
      String value = event.target.value;
      final difficultyLevel = value.parseFromString();

      level.set(difficultyLevel);
    }

    void _resetGame() {

    }

    return (
      (Dom.div()
        ..className = 'game-settings'
      )(
        (Dom.label()
          ..className = 'game-settings__difficulty'
        )('Difficulty'),
        (Dom.select()
          ..name = 'difficulty'
          ..onChange = (e) => _changeDifficulty(e)
        )(
          _getDifficultyOptions()
        ),
        (Dom.button()
        ..className = 'game-settings__reset'
        ..onClick = (_) => _resetGame()
        )('😋'),
        _showBombCount(numBombs.value),
        (GameContext.Provider()..value = providerMap)(props.children),
      ));


  },

  _$GameSettingsConfig, // ignore: undefined_identifier
);

ReactElement _getDifficultyOptions() {
    return Fragment()(
        (Dom.option()
          ..value = 'Easy'
          ..key = 'Easy'
        )('🙂'),
        (Dom.option()
          ..value = 'Medium'
          ..key = 'Medium'
        )('🤨'),
        (Dom.option()
          ..value = 'Difficult'
          ..key = 'Difficult'
        )('🤬'),
    );
}

ReactElement _showBombCount(int numBombs) {
  return (Dom.span()
          ..className = 'game-settings__bombs'
        )('💣 $numBombs');
}

int _getBombCount(DifficultyLevel level) {
  if (level == DifficultyLevel.easy) {
    return 10;
  } else if (level == DifficultyLevel.medium) {
    return 40;
  } else if (level == DifficultyLevel.hard) {
    return 99;
  }
  return 0;
}
