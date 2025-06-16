# Portfolio Site

This is a website that will function as my portfolio for my study.
It's designed to invoke a similar feeling to old personal websites and/or MySpace pages.

<hr>

## Changelog

A list of project updates and their additions and changes.

### 1.5.8 - Portfolio Update - Projects and LO Updates

_Added more content to the LO page, plus updates to the Projects section on the Homepage_

- Added more LO1 and LO2 content
- Added the Dead Man's Switch to the projects section on the Homepage.

Notes:
- Favicon seems to have stopped working? I do not know why? I didn't touch any of the favicon code?? T-T


<small>_16 June 2025_</small>
<hr>

### 1.5.7 - Portfolio Update - ReadMe

_I discovered recently that I hadn't been updating the ReadMe file with these commit messages. So I've added the information from these commit messages to the ReadMe file._

- ReadMe file now contains ReadMe information.
  - Including a full changelog of all previous versions!
  - Fixed a few errors in the changelogs and made some upgrades to them, such as listing the release date.

<small>_16 June 2025_</small>
<hr>

### 1.5.6 - Portfolio Update - LOs and great progress

  _The portfolio site now contains an integrated portfolio. Or at least the beginnings of one. I have added LO1. I am working on LO2._

- Learning Outcomes page now features LO1.
    - The collapsible section has a little navbar for navigation.
  - Started work on LO2
  - For the LO page I have included a newly reworked Dead Man's Switch. I had a lot of fun making it and eh... kind of forgot to commit changes... oops.
      - Updated the aesthetics to fit the portfolio site
      - Added a button linking to the main pages.
      - Added a High Score system.
          - High scores are stored client-side, and will be lost upon reloading.
          - High Scores can be shared to Bsky using a pre-populated share option.
              - This post will ping me to let me know of the user's new high score (I'm surely not going to regret this ever)
              - The current High Score is automatically added using a little JS.
              - The hashtag #DeadMansSwitch is added.
      - Added a progress bar for additional UI feedback.
      - Overhauled the code to remove unnecessary and unused parts.

<small>_16 June 2025_</small>
<hr>

### 1.5.5 - Portfolio Update - Start of the Portfolio
  _The portfolio site now contains an integrated portfolio. Or at least the beginnings of one._

  - The Portfolio page now contains the introduction.
      - Further content pending

    - Learning Outcomes page added
        - Added collapsible sections for the first learning outcome (wip)

<small>_16 June 2025_</small>
<hr>

### 1.5.4 - Portfolio Update - Music Player User Feedback

  _After letting a couple of people test my site, one of the most requested features was a stop button for the music player._


- A Stop button was added to the toolbar on the Homepage
    - When a song is playing, clicking the stop button stops the song (revolutionary)
        - Stopping a song plays a new Cassette Eject sound called sfx_song_stop
            - This is despite the fact that it's not themed after a cassette player but a gramophone, because I simply like the sound.
            - It's also secretly not a cassette eject sound but a recording of a typewriter.
    - When a song is not playing it plays a different sound for feedback, and it doesn't... stop... the song... obviously...
        - When the stop button is clicked in a non-functional state it plays the new sound sfx_switch which is awesome. Shoutout to sfx_switch.
    - When a song starts playing the stop button gets highlighted and becomes the default established clickable colour.

<small>_13 June 2025_</small>
<hr>

### 1.5.3 - Portfolio Update - Playlist Patch

  _A very minor update with small fixes. Updated the playlist to reflect new song titles._

  - Playlist details updated
    - "Going to bed at the Wrong 6 O'clock" now properly displays the full title.
    - Unnamed Chipsynth renamed to "Ré Nao", as the song is no longer unnamed.  

<small>_7 June 2025_</small>
<hr>

### 1.5.2 - Portfolio Update - Smaller Patch
  _A somehow EVEN smaller update to start off the portfolio page updates with!_

  - Fixed a bug relating to the new music player gramophone icon, where the paused icon wouldn't update properly if the last song finished playing on its own.

<small>_5 June 2025_</small>
<hr>

### 1.5.1 - Portfolio Update - Small Patch
  _An even smaller update to start off the portfolio page updates with!_

- Changed the Portfolio page banner from a lavender purple to light blue, to make it more clearly visual distinct.

<small>_5 June 2025_</small>
<hr>

### 1.5.0 - Portfolio Update
  _A small update to start off the portfolio page updates with!_

  - Portfolio page now has a distinct banner colour.
    - The Navbar buttons are now also animated upon hover.
        - Due to the way the hover highlights work this does cause minor visual issues. I'll be updating the buttons to be consistent with other menu elements soon. Not high priority.
    - Added a new gramophone icon variation featuring a play button that shows when a song finished playing on its own and the playback is paused.
    - Fixed a typographical error in the song title "Athazagoraphobia (Music Mix)" (It's a hard name okay...)

<small>_5 June 2025_</small>
<hr>

### 1.4.7 - Music Update - Bugfix Patch & Playlist Order Changed
  _Patched a bug where the UI elements didn't and couldn't stop dancing. I also Changed around the Playlist order for a more diverse order._

  - The song playlist order was shuffled around a bit.
    - The pagedoll and logo in the top corner still dance along to the music! And now they ALSO properly stop when the party is over!! To avoid a repeat of the dancing plague of 1518 I have patched the JS code to fix this issue! You can thank me later ;3
    - When the playlist end is reached, the UI elements now stop dancing like intended. Previously they only stopped after a song was finished in its entirety, but not when the playlist ended.

<small>_5 June 2025_</small>
<hr>

### 1.4.6 - Music Update - Part 2
  _Small updates to the Music Player to the Homepage!_

  - The pagedoll and logo in the top corner now dance along to the music! It's really cute <3

<small>_5 June 2025_</small>
<hr>

### 1.4.5 - Music Update
  _Added a Music Player to the Homepage! This maybe warranted a bigger version number change..._

  - Added a music player to the hotbar that plays music I made! (and also my one of my favourite nokia ringtones)
    - Songs included in the Playlist:
        - Abandoned Arcade by Sternens Lapis
        - Bhava by Sternens Lapis
        - Darkness Before Dawn by Sternens Lapis
        - Evy's Theme by Sternens Lapis
        - floccinaucinihilipilification by Sternens Lapis
        - Hyōhaku-zai-iri banana (漂白剤入りバナナ) by Sternens Lapis
        - Unnamed Chipsynth by Sternens Lapis
        - Unused Theme 1 by Sternens Lapis
        - Wrong 6 O'Clock by Sternens Lapis
        - Athazagoraphobia by Sternens Lapis
        - Espionage by Nokia Sound Team
    - Display text on the bottom of the hotbar shows the song name and artist and the album of origin.
    - When a song is playing, clicking the player again skips the current song.
    - After the last song in the list, skipping stops the player again.
    - When a song finishes the player automatically stops playing until activated again.
        - after being reactivated the song player continues where it left off in the playlist.
    - Added a new animation for the Gramophone player to play during songs.
    - Gramophone player shows a skip button to indicate when a song can be skipped. By default, or after the end of the playlist is reached no skip button is shown.
    - Song details update to default once the song stops playing.
    - Gramophone player animations stop automatically upon the end of a song.

<small>_4 June 2025_</small>
<hr>

### 1.4.4 - Favicon Update
  _Added Favicon!_

- Added Favicon

<small>_3 June 2025_</small>
<hr>

### 1.4.3 - More more sounds
  _A very minor update in-between adding a few more sounds._

- Top corner logo can now play one of 17 different sound effects upon hovering to add more variety.

<small>_3 June 2025_</small>
<hr>

### 1.4.2 - More sounds
  _A very minor update adding more random sounds._

  - Top corner logo can now play two sound effects upon hovering
    - Attempted to add delay to social links but decided against it, as the sound plays as intended since they target a blank tab. I don't want to artificially delay anything unnecessarily
    - Small changes

<small>_2 June 2025_</small>
<hr>

### 1.4.1 - Socials and improved animations
  _A minor update adding links to my socials, as well as adding new animations to the site._

  - Updated the footer to include links to my social media.
      - One of these is a link to my GitHub.
    - Added hover animations for several UI elements:
        - Pagedoll now has squash and stretch upon hovering
        - A multitude of elements now tilt in a random direction upon hover and shake when clicked. These are:
          - Logo in the top corner
          - Project links in the project overview section
          - Hotbar section elements now also have these improved animations
          - Social media links in the footer (the shake is only visible when crtl+click is used)
              - Might want to add a navigation delay here in the future.
              - Social media links play a brand-new sound when clicked called sfx_boing.wav
    - Removed the navbar sound issue from the roadmap section of the README since it was resolved in a previous version.

<small>_2 June 2025_</small>
<hr>

### 1.4 - Sounds and details update
  _A minor update adding fixes for sound effects and new ways to trigger them._

  - Fixed issue where menu items were being interrupted by navigation before they could play their sound effect. Now elements with both a link and a sound effect will delay their navigation slightly so the audio can play.
    - Added a Hotbar section to the bottom of the Homepage where different sounds can be triggered by the user whenever they want.
      - Because all these elements do is play the sound they represent they're spammable. They don't move the page or lead anywhere. They're just here so users can mess around with the sounds.

<small>_2 June 2025_</small>
<hr>

### 1.3 - Footer Updates & Embed Fix

  - Added a missing space in the footer's text.
    - Fixed the pdf embed (A capitalisation issue broke the embed in the previous version (1.2) )
  - Added a robots.txt file

<small>_2 June 2025_</small>
<hr>

### 1.2 - Design, Projects and Portfolio Update
  _This version is the first version to be hosted on Hera._

  - Implemented and applied the design to the layout template I had made.
    - Added a projects section
        - Currently only holds one project, will be expanded in the future!
        - Currently, not yet a separate page, only the home menu overview is implemented. Planning on changing this in the future!
        - Belco site was moved from being hosted on my hera domain, to instead being accessed through my portfolio website. The files are included in the commit, because I was afraid I'd forget to upload them separately in the directadmin files section. This way I can't forget them!!
    - Added Portfolio page
        - Currently consists of an embedded pdf file. This will be properly implemented in the future!

<small>_2 June 2025_</small>
<hr>

### 1.1 - Portfolio Website Template

  - Added structure to the site (such as header, footer, nav, main etc) (WIP)
    - Added test for custom buttons in the nav bar (WIP)

<small>_9 May 2025_</small>
<hr>


### 1.0 - Initial Commit
  _This commit contains only the basic files, just to test if the commit works. The contents of the files is negligible._

<small>_1 April - 16 April 2025_</small>

<hr>


## Roadmap
  - Add project and portfolio content properly, incl text and images
    - I think I want to decorate the footer a little more.
    - If I can find the time to, I want to add more little details to enhance the early 2000s personal website/myspace page feel.
    - Images on the site are currently not optimised. I might want to optimise them for web use and implement them as webp files instead.
    - There are a couple of warnings I need to get rid of 
    - hr elements do not work consistently.
    - Navbar elements show unintended visual behaviour when animated upon hover.
    - It'd be cool if the Dead Man's Switch High-Scores could be stored server-side. This is very low priority though.
    - I'd like an on-site changelog archive.

## Contributing
I currently am not open to contributions. This is a personal project.