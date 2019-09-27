# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

5.times {User.create(username:Faker::Artist.unique.name)}


# 5.times {Artwork.create(title:Faker::Book.unique.title,image_url: )}

Artwork.create(title: 'Mona Lisa', image_url: 'ml.io', artist_id: 1)
Artwork.create(title: 'Starry Night', image_url: 'sn.io', artist_id: 4)
Artwork.create(title: 'Thinker', image_url: 't.io', artist_id: 5)
Artwork.create(title: 'untitled', image_url: 'u.io', artist_id: 3)



ArtworkShare.create(artwork_id:1,viewer_id:3)
ArtworkShare.create(artwork_id:2,viewer_id:4)
ArtworkShare.create(artwork_id:4,viewer_id:2)
ArtworkShare.create(artwork_id:4,viewer_id:1)
ArtworkShare.create(artwork_id:4,viewer_id:3)
ArtworkShare.create(artwork_id:4,viewer_id:4)
ArtworkShare.create(artwork_id:3,viewer_id:1)
ArtworkShare.create(artwork_id:2,viewer_id:1)