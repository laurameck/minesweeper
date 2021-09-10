Minesweeper

How to run:
- Follow instructions for [installing dart](https://dart.dev/get-dart)
- Run a `pub get` in the root directory
- Run `webdev serve` in the root directory, then navigate to `localhost:8080`
- Project is also hosted [here](https://laurameck.github.io/minesweeper/)


Things I would do differently:
- My initial thought was that using a reducer pattern wouldn't be necessary for this project and that contexts would be sufficient, but as I got deeper into the implementation I quickly realized using reducers would have made the data flow much easier to follow and manage.
- Additionally, I should have made the cells a "dumb" component, with the parent managing all of the state and passing along things like a click handler callback. In letting the cell manage portions of its own state, I made it much harder to do things such as expanding the board when an empty cell is encountered.
- I also would have pulled more of the state management of the board into the game settings, as that would have simplified events such as reloading an entire board when the user clicks reset.
- At the root of it, I needed to lift way more state up than I did in this implementation. In letting the board and cells dictate their own state, it made communication between those two and the settings difficult and convoluted.