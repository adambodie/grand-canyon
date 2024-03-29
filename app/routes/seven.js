import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      {'title': 'The first view we got of the Grand Canyon', 'image': 'firstview', 'alt': 'firstview', 'description': 'Time to say Oooooh and Aaaaaah', 'id': 0},
      {'title': 'Grand Canyon Powerhouse', 'image': 'powerhouse', 'alt': 'powerhouse', 'description': 'An example of the architecture at Grand Canyon Village', 'id': 1},
      {'title': 'Grand Canyon Railway', 'image': 'traingc', 'alt': 'traingc', 'description': 'Time to say goodbye to Train travel for today', 'id': 2},{'title': 'The Fred Harvey Car', 'image': 'fredharvey', 'alt': 'fredharvey', 'description': 'That was the car we were in. Big Dome.', 'id': 3},
      {'title': 'Another Train', 'image': 'train2', 'alt': 'train2', 'description': 'We saw lots of trains', 'id': 4},
      {'title': 'Grand Canyon Depot', 'image': 'depot', 'alt': 'depot', 'description': 'This is where we were dropped off', 'id': 5},
      {'title': 'Pink Bus', 'image': 'pinkbus', 'alt': 'pinkbus', 'description': 'Of course, there are worse ways of travel than by Train', 'id': 6},
      {'title': 'Hopi Point', 'image': 'hopi1', 'alt': 'hopi', 'description': 'The first extensive viewpoint we saw, Hopi Point.', 'id': 7},
      {'title': 'Hopi Point', 'image': 'hopi3', 'alt': 'hopi', 'description': 'Look at all the shadows the clouds provide.', 'id': 8},
      {'title': 'Hopi Point', 'image': 'hopi4', 'alt': 'hopi', 'description': 'Down in the blue is the Colorado River. Looks small from so far up.', 'id': 9},
      {'title': 'Hopi Point', 'image': 'hopi5', 'alt': 'hopi', 'description': 'With all the amazing colors of the Grand Canyon, it\'s hard to pick which one stands out the most.', 'id': 10},
      {'title': 'Hopi Point', 'image': 'hopi6', 'alt': 'hopi', 'description': 'The Reds, the Browns, mixed with a little Green. Amazing!', 'id': 11},
      {'title': 'Hopi Point', 'image': 'hopi8', 'alt': 'hopi', 'description': 'That\'s over 6,000 feet down to the bottom. We\'re so high up.', 'id': 12},
      {'title': 'Hopi Point', 'image': 'hopi9', 'alt': 'hopi', 'description': 'What is most amazing is that the surrounding land is really flat, while the Grand Canyon is so rugged.', 'id': 13},
      {'title': 'Hopi Point', 'image': 'hopi10', 'alt': 'hopi', 'description': 'Native American\'s lived in caves within the Grand Canyon. I can\'t imagine doing that.', 'id': 14},
      {'title': 'Hopi Point', 'image': 'hopi11', 'alt': 'hopi', 'description': 'The clouds make the picture even more amazing, especially with how they form. Cool!', 'id': 15},
      {'title': 'Hopi Point', 'image': 'hopi13', 'alt': 'hopi', 'description': 'One thing I wouldn\'t want to do is step to the edge of any cliff here.', 'id': 16},
      {'title': 'Hopi Point', 'image': 'hopi14', 'alt': 'hopi', 'description': 'A perfect place to celebrate my 30th Birthday', 'id': 17},
      {'title': 'Hopi Point', 'image': 'hopi16', 'alt': 'hopi', 'description': 'Wow!!!', 'id': 18},
      {'title': 'Hopi Point', 'image': 'hopi17', 'alt': 'hopi', 'description': 'Double Wow!!!', 'id': 19},
      {'title': 'Hopi Point', 'image': 'hopi18', 'alt': 'hopi', 'description': 'Triple Wow!!!', 'id': 20},
      {'title': 'Hopi Point', 'image': 'hopi19', 'alt': 'hopi', 'description': 'Only 25 minutes to see the area. Just enough time to see every viewpoint along the way.', 'id': 21},
      {'title': 'Hopi Point', 'image': 'hopi21', 'alt': 'hopi', 'description': 'Mom thought she could keep an eye on me at all times.', 'id': 22},
      {'title': 'Hopi Point', 'image': 'hopi23', 'alt': 'hopi', 'description': 'That didn\'t work, but guess what?', 'id': 23 },
      {'title': 'Hopi Point', 'image': 'hopi25', 'alt': 'hopi', 'description': 'I ain\'t no stupid dummy!', 'id': 24},
      {'title': 'Hopi Point', 'image': 'hopi27', 'alt': 'hopi', 'description': 'I would never put myself in harms way.', 'id': 25},
      {'title': 'Hopi Point', 'image': 'hopi28', 'alt': 'hopi', 'description': 'Coming back home with stories to tell is better than falling to a grizzly death.', 'id': 26},
      {'title': 'Hopi Point', 'image': 'hopi29', 'alt': 'hopi', 'description': 'It was worth the time to visit Hopi Point.', 'id': 27},
      {'title': 'Hopi Point', 'image': 'hopi30', 'alt': 'hopi', 'description': 'No wonder the Hopi tribe worshiped this place.', 'id': 28},
      {'title': 'Hopi Point', 'image': 'hopi31', 'alt': 'hopi', 'description': 'I would too if I lived closer to it, but I\'ll stay out of Arizona', 'id': 29},
      {'title': 'Hopi Point', 'image': 'hopi32', 'alt': 'hopi', 'description': 'Almost done with Hopi Point', 'id': 30},
      {'title': 'Hopi Point', 'image': 'hopi33', 'alt': 'hopi', 'description': 'And now it\'s time to move to another point', 'id': 31},
      {'title': 'Elk Alert!', 'image': 'elk', 'alt': 'elk', 'description': 'The first of many Elk we saw just off the roads.', 'id': 32},
      {'title': 'Mohave Point', 'image': 'mohave1', 'alt': 'mohave', 'description': 'Next stop: Mohave Point', 'id': 33 },
      {'title': 'Mohave Point', 'image': 'mohave3', 'alt': 'mohave', 'description': 'The same Grand Canyon, but yet a much different look and feel', 'id': 34},
      {'title': 'Tree Growing in Rock', 'image': 'mohave4', 'alt': 'mohave', 'description': 'Look at that, the Tree is growing in the rock. Grand Canyon!', 'id': 35},
      {'title': 'Mohave Point', 'image': 'mohave6', 'alt': 'mohave', 'description': 'The Colorado River appears more pronounced at this viewpoint (in my opinion)', 'id': 36},
      {'title': 'Mohave Point', 'image': 'mohave7', 'alt': 'mohave', 'description': 'More twists and turns at the Grand Canyon.', 'id': 37},
      {'title': 'Mohave Point', 'image': 'mohave8', 'alt': 'mohave', 'description': 'Another Native American named viewpoint.', 'id': 38},
      {'title': 'Mohave Point', 'image': 'mohave9', 'alt': 'mohave', 'description': 'If I had more time at the Grand Canyon, I would have loved to see the other viewpoint on Hermit\'s Rest path', 'id': 39},
      {'title': 'Mohave Point', 'image': 'mohave10', 'alt': 'mohave', 'description': 'There\'s so much to see, it would take a week to see everything (just on the South Rim)', 'id': 40},
      {'title': 'Mohave Point', 'image': 'mohave12', 'alt': 'mohave', 'description': 'Who knows what it\'s like on the North Rim', 'id': 41},
      {'title': 'Mohave Point', 'image': 'mohave13', 'alt': 'mohave', 'description': 'My birthday was perfect!', 'id': 42},
      {'title': 'Mohave Point', 'image': 'mohave14', 'alt': 'mohave', 'description': 'I\'m glad my family was with me.', 'id': 43 },
      {'title': 'Mohave Point', 'image': 'mohave15', 'alt': 'mohave', 'description': 'Again, I didn\'t go anywhere near the edge.', 'id': 44},
      {'title': 'Mohave Point', 'image': 'mohave16', 'alt': 'mohave', 'description': 'Another 25 minutes, again, enough time to see everything in the area', 'id': 45},
      {'title': 'Mohave Point', 'image': 'mohave17', 'alt': 'mohave', 'description': 'One more time for Mohave Point', 'id': 46},
      {'title': 'Mohave Point', 'image': 'mohave19', 'alt': 'mohave', 'description': 'And a close-up of the Grand Canyon at the Colorado River', 'id': 47},
      {'title': 'Rabbit', 'image': 'rabbit', 'alt': 'rabbit', 'description': 'Dad found this rabbit in the bushes.', 'id': 48},
      {'title': 'Lizard', 'image': 'lizard', 'alt': 'lizard', 'description': 'It took me forever to find the lizard, but when I did, wow!', 'id': 49},
    ]
  }
});
