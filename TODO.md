# site/layout versions

/*
- ga4...
- jordan's prs
*/

## TODO:
  - look at / update my gh issue
  - look at klara's designs
    - what is the workflow...
    - currently when you land at the site, you get the published version...
      - but how does that actually work? do we fetch the draft???
    - currently when you go to the site editor you get the draft
      - does that make sense in the context of versions?
      - maybe you should get the published version (ie the item)
  - ---
  - the whole this system can version anything idea is cool but i have no idea how it would fit in with what i am doing
    - except that that allows us to easily do pages or other things with layout
    - layer of indirection for what the thing is and how we persist it???
  - TS
  - how do we handle resources today? i think we don't for drafts but what do we do when somebody adds an image card?
  - can/should i leverage the existing draft system???
    - can i repurpose the version system to do drafts?
  - look at the stuff we do in the draft system - we whitelist props and buldDraft(), etc, etc, etc
  - the whole resources/folders thing might not make sense (and wtf is the notion of variable interpolation)
  - what about other resources (images)?
  - today, if there is a draft, that is what we show when we land on the site editor - but what to do in the world of versions?
  - will this stuff go on the site class or in modules?
  - what are we versioning? AT says the layout but we currently save the whole site as a draft but then we whitelist some props i think
    - layout
    - theme?
  - are there issues related to item or resource ownership?


## Notes
  - createdAt/updatedAt
    - we can hang created/updated on the layout object
    - but the api only gives us created but it seems to actually be updated
  - we can hang anything onto the resource but we get very limited info when we ask for the list of resources (no creator)
    - that means we can't show the creator in the list (without an n+1 query)
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
- andrew was talking some crazy shit about variable interpolation and a root level variables object and adlib and some shit about {version#3}.dog.jpg...


===

draft system

fetchDraft
applyDraft - why do we need this??? i think it is because we whitelist certain props but maybe we don't need it
  - or maybe it is really because a draft is only a subset of the site (which maybe is a different way of saying the same thing)

saveDraft
markUnpublished - just adds a particular typeKeyword (state:hasUnpublishedChanges) to the item
savePublishedStatus - persists state:hasUnpublishedChanges to the item
  - i guess the idea with the two above functions is that that is how the site item knows if it has a draft with unpublished changes or not

deleteDraft
addItemResource
markPublished
