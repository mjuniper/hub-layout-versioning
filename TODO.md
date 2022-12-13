# site/layout versions

## TODO:
  - the whole resources/folders thing might not make sense (and wtf is the notion of variable interpolation - AT was talking about variable interpolation and a root level variables object and adlib and something about {version#3}.dog.jpg...)
  - should we not allow deleting the published version - i think it is fine - the published version is really the item
  - will this stuff go on the site class or in modules? - i think we start with modules because that is what we use in od-ui today

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
