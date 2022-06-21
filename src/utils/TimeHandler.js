export class TimeHandler {
   constructor(time) {
      this.time = time
   }
   getHours() {
      this.hours = Math.floor(this.time / 3600)
      return this.hours < 10 ? '0' + this.hours : this.hours
   }
   getMinutes() {
      this.minutes = Math.floor((this.time - (this.hours * 3600)) / 60)
      return this.minutes < 10 ? '0' + this.minutes : this.minutes
   }
   getSeconds() {
      this.seconds = this.time - this.hours * 3600 - this.minutes * 60
      return this.seconds < 10 ? '0' + this.seconds : this.seconds
   }
   setTime(value) {
      this.time = value
   }
}