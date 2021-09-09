import 'dart:html';
import 'package:over_react/react_dom.dart' as react_dom;
import 'package:over_react/over_react.dart';

import 'game.dart';

void main() {
react_dom.render(
    Game()(),
    querySelector('#react_mount_point'),
  );
}

