# site/layout versions

WRT image resource copying, i think these 2 scenarios are what we are worried about:
setup: user has 2 (or more) versions of the same site, they both have an image card that uses the same image
1. user deletes the image card from one of the versions
  - today we delete the image resource (i think)
  - we would just need to either not do that OR check if it is used elsewhere
2. user uploads a new image with the same name to one of the versions (ie they replace the image)
  - today we flag the user that an image with that name already exists and offer to let them replace it
  - we could offer to let them upload it with a different name, thus avoiding the collision
  - we could attempt to check if it is in use before telling them it already exists

i think these ideas in conjuntion with a media gallery might address the issues
  - but i think we would want to tell the user where the various image resources are used

this all points to the need to know if an image resource is in use - this could be tricky today but i have been thinking about the idea of a central resource registry - i don't love that tho because i prefer the individual layouts to be the source of truth wrt what image resources it uses - but it might be necessary if we do not copy resources around into version folders

i think the core issue is that we either need to never overwrite or delete image resources
  - this could be viable if we give them a media gallery (but we will still need to know if/where images are used)
    - but maybe for this use case we could do the check when we load it up
OR we need to be able to know if/where an image resource is in use
  - one way to do that is by always keeping image resources next to the version (ie in version folders)
  - another is to check every time we need to know (by downloading all the versions and parsing them) - this is not viable
  - another is to maintain an image resource registry

- the fundamental problem is that they are editing a model in memory and we don't know what they're going to do with it
  - so we don't know where to put the images that they might upload when they upload them
  - so we upload them to the root and copy them to the version directory if they save as a version
  - it is hard to know if we should be moving them instead of copying them... 
    - which maybe is the fundamenatal problem - keeping the right images in the right folders might be hard - we will probably end up with orphans
  - then when they publish the site, we copy them back to the root (either that or we have to disallow deleting the published version or we have to keep track of the images referenced by the published site and be sure not to delete those when deleting a version...) - we may be stepping on stuff that is already there... is that ok???
- alternatives to copying resources to version directories:
    - media gallery???
    - keep a resources.json registry on the item that is a registry of resources and where they are used???
- what is the problem we are trying to solve???
  - is it preventing collisions (upload a new version of an image for your version not realizing that other versions reference it)?
  - there is also the issue of deleting an image card in one version that actually shares an image with other versions (is that potentially a problem even if we do copy resources)...
  maybe we can mitigate that by:
    - allowing uploading with a new name?
    - giving them a media gallery?
      - i think that would have to tell them what resources are referenced by versions
    - maybe we need to have a central image resource dictionary that lists all the resources and where they are used... but that seems brittle
## TODO:
  - dave's comment
  - look at klara's workflow diagrams
  - look at her new ui diagrams
  - think through other workflows
    - when are versions created?
    - are you always editing a version?
  - AT: we shouldn't be thinking about pixels yet, instead workflows; some time soon i will create a sequence diagram? then a rosetta stone?
  - take another look at the stuff we do in the draft system
  ---
  - the whole resources/folders thing might not make sense (and wtf is the notion of variable interpolation - AT was talking about variable interpolation and a root level variables object and adlib and something about {version#3}.dog.jpg...)
  - should we not allow deleting the published version - i think it is fine - the published version is really the item

## UX concerns
- the "published version" could have new changes that are not published - need to account for that in the ui

-------

- how does this stuff fit into this
  - Overwrite warning (4719) (on save, publish, or both)
  - Save as new page (4715)
  - Replace layout with another layout (4718)
  - CKEditor w/ Undo/redo for text card
  - Undo/Redo (stack) - major actions
  - Copy + Paste between layouts
  - Save as named version
  - Option to Auto-save on major actions
  - indicator showing other people editing the site
