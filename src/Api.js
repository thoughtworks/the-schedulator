import { default as conferenceSchedule } from "./data/ConferenceSchedule";

class Api {
  getConferenceSchedule() {
    return conferenceSchedule;
  }

  getDays() {
    return conferenceSchedule.map(d => d.day);
  }

  getScheduleForDay(day) {
    return conferenceSchedule.find(d => d.day === day).schedule;
  }

  getTalkAtIndexForDay(day, talkIndex) {
    return conferenceSchedule.find(d => d.day === day).schedule[talkIndex];
  }
}

const API = new Api();
export default API;
