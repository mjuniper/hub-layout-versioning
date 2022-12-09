# site/layout versions

- ga4???
- next sprint
  - remove old gallery card?
- jordan's prs
- look at jordan's confluence page
- other open tabs
- email
- year end reviews
- fedramp courses

## TODO:
  - think through what i did on thursday - does the api make sense?
  - we should also keep creator/createdBy on the resource
  - if we really need access to all the metadata (created, creator, etc) in a list view, we could store the list of versions w/ metadata on the item.data; but i'd rather not do that because it is better to have a single source of truth
  - look at / update my gh issue
  - what are the remaining uncertainties
  - look at klara's designs
    - what is the workflow...
    - currently when you land at the site, you get the published version...
      - but how does that actually work? do we fetch the draft???
    - currently when you go to the site editor you get the draft
      - does that make sense in the context of versions?
      - maybe you should get the published version (ie the item)
  - ---
  - it should be able to version anything that is backed by an item
  - the whole resources/folders thing might not make sense (and wtf is the notion of variable interpolation)
  - how do we handle resources today? i think we don't for drafts but what do we do when somebody adds an image card?
  - can/should i leverage the existing draft system???
    - can i repurpose the version system to do drafts?
  - look at the stuff we do in the draft system - we whitelist props and buldDraft(), etc, etc, etc
  - today, if there is a draft, that is what we show when we land on the site editor - but what to do in the world of versions?
  - will this stuff go on the site class or in modules?
  - should we not allow deleting the published version?
  - what are we versioning? AT says the layout but we currently save a whole bunch of the site as a draft but then we whitelist some props i think
    - layout
    - theme?
  - are there issues related to item or resource ownership?
  - keep track of lineages??? probably not


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
