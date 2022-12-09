# site/layout versions

- next sprint
  - remove old gallery card?
- telemetry stuff
- look at jordan's confluence page
- other open tabs
- email
- year end reviews
- fedramp courses

## TODO:
  - think through what i did on thursday - does the api make sense?
  - look at / update my gh issue
  - what are the remaining uncertainties?
  - look at klara's designs
    - what is the workflow...
    - currently when you land at the site, you get the published version...
      - but how does that actually work? do we fetch the draft???
    - currently when you go to the site editor you get the draft
      - does that make sense in the context of versions?
      - maybe you should get the published version (ie the item)
  - ---
  - what are we versioning?
    - site drafts are a while bunch of properties (title, snippet, layout, theme, telemetry config, content view config, headContent config, etc); page drafts are a subset of those
    - AT says we are versioning layout
    - DB says it should be layout and theme
    - this system should be flexible enough to allow including whatever we want (currently it is by item type)
  - the whole resources/folders thing might not make sense (and wtf is the notion of variable interpolation - AT was talking about variable interpolation and a root level variables object and adlib and something about {version#3}.dog.jpg...)
    - how do we handle resources today? i think we don't for drafts but what do we do when somebody adds an image card?
  - can/should i leverage the existing draft system???
    - or can i repurpose the version system to do drafts?
  - take another look at the stuff we do in the draft system
  - today, if there is a draft, that is what we show when we land on the site editor - but what to do in the world of versions?
  - will this stuff go on the site class or in modules?
  - should we not allow deleting the published version?
  - are there issues related to item or resource ownership?
  - keep track of lineages??? probably not

## Notes
  - i think this system should be able to version anything that is backed by an item
  - created/updated/creator
    - we can hang created/updatedcreator on the layout object
    - but the api only gives us created but it seems to actually be updated
  - we can hang anything onto the resource but we get very limited info when we ask for the list of resources (no creator)
    - that means we can't show the creator in the list (without an n+1 query)
    - if we really need access to all the metadata (created, creator, etc) in a list view, we could store the list of versions w/ metadata on the item.data; but i'd rather not do that because it is better to have a single source of truth
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
