# chrome-extension-reading-automater
Chrome extension that lets you collect articles and then read them back in an organized way at some later time.

## User Stories
1. As a user, I should be able to add links or pages to my Reading List by right-clicking on a link or current page and selecting the special right-click menu item for the Reading Automater that will "Add to My Reading List."
2. As a user, I should be able to open a settings page (should open as a new tab or window) to adjust Reading Automater settings:
* Automatically open Reading List? Y/n
* Frequency of automatically opening Reading List: Daily, Weekly, Biweekly, Monthly
* Day and time to automatically open Reading List: (day) (time)
* How long to read? (number of minutes from 1 to 180?) OR (until I close the Reader)
* Keyboard shortcut to open Reading List: (user-defined keyboard shortcut)
* Enable Snooze for automatic opening? Y/n
* Number of minutes to snooze: (number from 1 to 60?)
* Save Changes button
3. As a user, I expect that my Reading List will automatically open when assigned to (if I have enabled automatic opening in Settings). It should open in a new browser window with minimal distractions (toolbars, etc.). I should be able to click a "Next Read" button once I have finished reading a page to load the next item on my Reading List in the stripped-of-distractions browser window ("Reader").
4. As a user, I should be able to "snooze" the Reader (delay its opening) if I enable this option in the Settings. If Snooze is enabled, an alert will pop up to let the user know that the Reader will open soon unless Snoozed.
5. Items on the Reading List that have been read ("Next Read" button clicked--or "Finish Reading List" if final item on list) should be removed from the Reading List.
6. Items that have not been read should remain on the Reading List for the next Reading session (in the same order as they were added, with items added first being read first).

## Development Roadmap
Would be nice to add:
1. Social/sharing component: Suggest items for a friend's Reading List or publish to some sort of Reading Timeline/Feed.
2. Customize the look and feel of the Reader.
3. Automatically mute sound in Chrome while Reader is open OR automatically start playing reading concentration music (in YouTube, e.g.).
