// Copyright (c) 2022 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: June 3rd
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-6-clara-tyman/sw.js", {
    scope: "/ICD2O-Assignment-06-clara-tyman",
  })
}

/**
 * This function displays random dad jokes.
 */
const getJoke = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("joke").innerHTML = data.setup + "<br><br>" + data.punchline
  } catch (err) {
    console.log(err)
  }
}

getJoke(
  "https://official-joke-api.appspot.com/random_joke"
)