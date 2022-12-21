# site/layout versions

## TODO:
  - image resources - copied to version directory
    - how to make it generic - what i am doing is fairly specific to layouts / sections / image card...
    - when we create a version, we need to copy all the images into the version directory
    - when we update a version, we need to do the same but do we need to update instead
    - when we delete, we need to remove all resources with the prefix
      - but what if it is the published one???
      - maybe publish needs to copy the resources to the root
      - i think this gets back to: are you always editing a resource
    - i don't think we need to do anything different when we get
    - for searchItemVersions we need the size to reflect the total size including image resources
    - how slow is it?
    - this could mean using lots of storage
    - today, we need to deal with image cards and section backgrounds... anything else?
  - alternatives to copying resources to version directories:
    - media gallery???
    - keep a resources.json registry on the item that is a registry of resources and where they are used???
  - ---
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
