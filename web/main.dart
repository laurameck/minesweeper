import 'dart:html';
import 'package:over_react/react_dom.dart' as react_dom;

import 'game.dart';

void main() {
react_dom.render(
    Game()(),
    querySelector('#react_mount_point'),
  );
}

