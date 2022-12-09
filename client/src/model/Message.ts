class Message {
  id: string;
  text: string;
  mentorshipId: string;
  isMentor: Boolean;
  isRead: Boolean;
  timeSent: Date;

  constructor(id: string, text: string, isMentor: Boolean) {
    this.id = id;
    this.text = text;
    this.mentorshipId = "1";
    this.isMentor = isMentor;
    this.isRead = true;
    this.timeSent = new Date();
  }
}

export default Message;
