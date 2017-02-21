# knockoutjs_tutorials
- 1
Good job!
This was a very basic example, but it did illustrate some of the key points of MVVM:
You've got a clean, object-oriented representation of your UI's data and behaviors (your viewmodel)
Separately, you've got a declarative representation of how it should be displayed visibly (your view)
You can implement arbitrarily sophisticated behaviors just by updating the viewmodel object. You don't have to worry about which DOM elements need to be changed/added/removed - the framework can take care of synchronizing things for you.
Subsequent tutorials will take you much deeper :)

- 2
Final niceties
Having followed the MVVM pattern and got an object-oriented representation of the UI's data and behaviors, you're in a great position to sprinkle on extra behaviors in a very natural and convenient way.
For example, if you're asked to display the total number of seats being reserved, you can implement that in just a single place, and you don't have to write any extra code to make the seat count update when you add or remove items. Just update the '<h2>' at the top of your view:

<!-- <h2>Your seat reservations (<span data-bind="text: seats().length"></span>)</h2> -->

Trivial.
Similarly, if you're asked to put a limit on the number of seats you can reserve, say, you can make the UI represent that by using the enable binding:

<!-- <button data-bind="click: addSeat, enable: seats().length < 5">Reserve another seat</button> -->

The button becomes disabled when the seat limit is reached. You don't have to write any code to re-enable it when the user removes some seats (cluttering up your "remove" logic), because the expression will automatically be re-evaluated by Knockout when the associated data changes.
If you'd like to learn ways of saving the updated data back to the server, see the Loading and Saving Data tutoria

- 3

- 4

- 5
