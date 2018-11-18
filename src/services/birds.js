
const birds = [
  {
    name: 'American Goldfinch',
    image: require('../resources/birds/american-goldfinch-large.png'),
    id: 0,
    description: "The American goldfinch is a small North American bird in the finch family. It is migratory, ranging from mid-Alberta to North Carolina during the breeding season, and from just south of the Canada–United States border to Mexico during the winter."
  },
  {
    name: "Baird's Sparrow",
    image: require('../resources/birds/bairds-sparrow-large.png'),
    id: '1',
    description: "Baird's sparrow is a species of North American birds in the family Passerellidae of order Passeriformes. It is a migratory bird native to the United States, Canada, and Mexico. It was formerly classified in the genus Ammodramus."
  },
  {
    name: 'Baltimore Oriole',
    image: require('../resources/birds/baltimore-oriole-large.png'),
    id: '2',
    description: "The Baltimore oriole is a small icterid blackbird common in eastern North America as a migratory breeding bird. It received its name from the resemblance of the male's colors to those on the coat-of-arms of Lord Baltimore."
  },
  {
    name: "Bewick's Wren",
    image: require('../resources/birds/bewicks-wren-large.png'),
    id: '3',
    description: "The Bewick's wren is a wren native to North America. At about 14 cm long, it is grey-brown above, white below, with a long white eyebrow. While similar in appearance to the Carolina wren, it has a long tail that is tipped in white. The song is loud and melodious, much like the song of other wrens."
  },
  {
    name: 'Black-capped Chickadee',
    image: require('../resources/birds/black-capped-chickadee-large.png'),
    id: '4',
    description: "The black-capped chickadee is a small, nonmigratory, North American songbird that lives in deciduous and mixed forests. It is a passerine bird in the tit family Paridae. It is the state bird of both Maine and Massachusetts in the United States, and the provincial bird of New Brunswick in Canada."
  },
  {
    name: 'Blue Jay',
    image: require('../resources/birds/blue-jay-large.png'),
    id: '5',
    description: "The blue jay is a passerine bird in the family Corvidae, native to North America. It resides through most of eastern and central United States, although western populations may be migratory. Resident populations are also found in Newfoundland, Canada, while breeding populations can be found in southern Canada."
  },
  {
    name: 'Indigo Bunting',
    image: require('../resources/birds/indigo-bunting-large.png'),
    id: '6',
    description: "The indigo bunting is a small seed-eating bird in the cardinal family, Cardinalidae. It is migratory, ranging from southern Canada to northern Florida during the breeding season, and from southern Florida to northern South America during the winter. It often migrates by night, using the stars to navigate."
  },
  {
    name: 'Mourning Dove',
    image: require('../resources/birds/mourning-dove-large.png'),
    id: '7',
    description: "The mourning dove is a member of the dove family, Columbidae. The bird is also known as the American mourning dove or the rain dove, and erroneously as the turtle dove, and was once known as the Carolina pigeon or Carolina turtledove. It is one of the most abundant and widespread of all North American birds."
  },
  {
    name: 'Red-winged Blackbird',
    image: require('../resources/birds/red-winged-blackbird.png'),
    id: '8',
    description: "The red-winged blackbird is a passerine bird of the family Icteridae found in most of North America and much of Central America."
  },
  {
    name: 'Ruby Throated Hummingbird',
    image: require('../resources/birds/ruby-throated-hummingbird-large.png'),
    id: '9',
    description: "The ruby-throated hummingbird is a species of hummingbird that generally spends the winter in Central America, Mexico, and Florida, and migrates to Eastern North America for the summer to breed. It is by far the most common hummingbird seen east of the Mississippi River in North America."
  },

]

// data call with `${genus}%20${species}`
// if I use data from wikipedia, I will need to use the species name and splice the text at the space and att %20

export default birds;
