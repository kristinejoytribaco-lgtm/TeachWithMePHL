{
  "name": "SessionProgress",
  "type": "object",
  "properties": {
    "student_id": {
      "type": "string",
      "title": "Student ID"
    },
    "session_number": {
      "type": "number",
      "title": "Session Number"
    },
    "phase": {
      "type": "number",
      "title": "Phase"
    },
    "lesson_completed": {
      "type": "boolean",
      "title": "Lesson Completed",
      "default": false
    },
    "game_completed": {
      "type": "boolean",
      "title": "Game Completed",
      "default": false
    },
    "game_score": {
      "type": "number",
      "title": "Game Score"
    },
    "mastery_achieved": {
      "type": "boolean",
      "title": "Mastery Achieved",
      "default": false
    },
    "completed_date": {
      "type": "string",
      "title": "Completed Date"
    },
    "attempts": {
      "type": "number",
      "title": "Attempts",
      "default": 1
    }
  },
  "required": [
    "student_id",
    "session_number",
    "phase"
  ]
}
