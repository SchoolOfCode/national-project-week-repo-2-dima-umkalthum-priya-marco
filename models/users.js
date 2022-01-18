

import query from './db/index.js';


  export async function getAllWeeks() {
    const data = await query(`SELECT * FROM weeks;`);
    return data.rows;
  }

  //It needs to be provided with the responding week id
  export async function getWeekNotes(id) {
    const data = await query(`SELECT * FROM information WHERE week = $1;`, [ id ]);
    return data.rows;
  }

  export async function addANoteToTheWeek(week, tags, summary, link, isComplete) {
    const data = await query(`INSERT INTO information ( week, tags, summary, link, isComplete ) VALUES ( $1, $2, $3, $4, $5 );`, [ week, tags, summary, link, isComplete ]);
    return data.rows;
  }

//Update of Information parameters

  export async function updateTags(id, tags) {
    const data = await query(`UPDATE information SET tags = $1 WHERE id = $2;`, [ id, tags]);
    return data.rows;
  }

  export async function updateSummary(id, summary) {
    const data = await query(`UPDATE information SET summary = $1 WHERE id = $2;`, [ id, summary]);
    return data.rows;
  }

  export async function updateLink(id, link) {
    const data = await query(`UPDATE information SET link = $1 WHERE id = $2;`, [ id, link]);
    return data.rows;
  }

  export async function getIsComplete(id, isComplete) {
    const data = await query(`UPDATE information SET isComplete = $1 WHERE id = $2;`, [ id, isComplete]);
    return data.rows;
  }

 //Delete a particular Note

 export async function deleteANote(id) {
    const data = await query(`DELETE FROM information WHERE id = $1;`, [ id ]);
    return data.rows;
  }