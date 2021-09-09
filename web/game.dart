import 'dart:html';

import 'package:over_react/over_react.dart';
import 'board.dart';
import 'game_settings.dart';

part 'game.over_react.g.dart';

enum DifficultyLevel {
  easy,
  medium,
  hard
}

mixin GameProps on UiProps {
}

UiFactory<GameProps> Game = uiFunction(
  (props) {
    return (
      Dom.div()
        ..className = 'game'
      )(
        GameSettings()(
          Board()(),
        ),
      );
  },

  _$GameConfig, // ignore: undefined_identifier
);