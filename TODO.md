# site/layout versions

## TODO:
  - the whole resources/folders thing might not make sense (and wtf is the notion of variable interpolation - AT was talking about variable interpolation and a root level variables object and adlib and something about {version#3}.dog.jpg...)
  - what are we versioning?
    - site drafts are a whole bunch of properties (title, snippet, layout, theme, telemetry config, content view config, headContent config, etc); page drafts are a subset of those
    - AT says we are versioning layout
    - DB says it should be layout and theme
    - this system should be flexible enough to allow including whatever we want (currently it is by item type)
  - what about drafts? i think they go away
    - it would be confusing both for devs and users to have drafts and versions
    - but we will need to migrate existing drafts to versions
  - today, if there is a draft, that is what we show when we land on the site editor - but what to do in the world of versions?
  - should we not allow deleting the published version?
  - the "published version" could have new changes that are not published - need to account for that in the ui
  - will this stuff go on the site class or in modules? - i think we start with modules because that is what we use in od-ui today

## Notes
  - i think this system should be able to version anything that is backed by an item
  - we can hang anything (created/updated/creator) onto the resource
    - but the api only gives us created (which seems to actually be updated)
    - that means we can't show the creator/created in the list without an n+1 query
    - if we really need access to all the metadata (created, creator, etc) in a list view, we could store the list of versions w/ metadata on the item.data; but i'd rather not do that because it is better to have a single source of truth - i think n+1 is the lesser evil
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
