import { Pipe, PipeTransform } from "@angular/core";
import { intervalToDuration, addSeconds } from "date-fns";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(seconds: number): string {
    const timeObject = intervalToDuration({ start: new Date(), end: addSeconds(new Date(), seconds) });
    return Object.entries(timeObject)
      .filter(([_, value]) => value !== 0)
      .map(([key, value]) => `${value} ${key}`)
      .join(", ");
  }
}
