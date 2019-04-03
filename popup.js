// need to create a custom right-click menu--running as a background action?
// should actually switch the background page to an eventPage instead
// browser action so it can be used on any page
// need to add an icon
// need to make use of chrome extension storage: https://developer.chrome.com/apps/storage
// add an options page to let users customize things like reading time/date, preferences for app behavior, etc.
// need to add a background.html
// use window.open() when it's time to start reading? the single window cycles through the saved collection and then displays another page when all the articles have been read ("all done!")
// that reading page needs to be stripped of as much distraction as possible--remove toolbars, etc. if possible
// users should still be able to add to their reading list while in reading mode. use example: let's say i'm reading an article from my list and it links to another article i want to read. instead of opening it up in a separate tab to read right now or "later" (never going to happen), i can right click and add it to the list, which will append it to the end of the current reading list i'm reading right now.
// to set a specific reading time and open the reading list window at that time: https://developer.chrome.com/extensions/alarms !!!
// I may need to use some sort of DB (MongoDB? mLab?) to save URLs rather than chrome.storage sync... maybe alarms and settings can stay in chrome.storage? not sure how large they will be

// for automatically loading the reading browser at a set time/date
const openBrowserWindow = url => {
  chrome.windows.create({
    url: url,
    state: "fullscreen",
    focused: true,
    type: "popup"
  });
};

// start here
window.addEventListener("DOMContentLoaded", () => {
  // opens a communication between scripts
  //   const port = chrome.runtime.connect();

  document.getElementById("add-to-list").addEventListener("click", () => {
    alert("Added to list! Just kidding. Be patient!");
  });

  document.getElementById("start-reading-now").addEventListener("click", () => {
    openBrowserWindow("reader.html");
  });

  document.getElementById("settings").addEventListener("click", () => {
    openBrowserWindow("options.html");
  });

  const datepicker = document.getElementById("datepicker");
  datepicker.addEventListener("click", () => {
    M.Datepicker.init(datepicker, options); // filler, does nothing right now
  });

  const startReadingNow = document.getElementById("start-reading-now");
  startReadingNow.addEventListener("click", openBrowserWindow);

  const openBrowserWindowAtFixedTime = fixedTime => {
    const now = new Date();
    const fixedDateInMilliseconds = new Date(fixedTime);
    const intervalInMilliseconds = fixedDateInMilliseconds - now;
    setTimeout(openBrowserWindow, intervalInMilliseconds);
  };

  // for setting the time and date and reading browser options

  //   chrome.contextMenus.create({
  //     title: "Add link to Reading List",
  //     contexts: ["link"],
  //     onclick: addArticle()
  //   });
});
