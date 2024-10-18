import { errorHandlerT, responseHandlerT } from "./types";
import { firstWordExtractorT } from "./types";
import { truncateTextT } from "./types";



export const errorHandler = ({ error, message }: errorHandlerT) => {
  const errorData = {
    hasError: true,
    error: error,
    message: message,
  };
  return errorData;
};
// response handler function
export const responseHandler = ({ data, message }: responseHandlerT) => {
  const newData = {
    hasError: false,
    body: data,
    message: message,
  };
  return newData;
};
// validation function
export const validateAllOnce = (fields: string[]) => {
  for (let key in fields) {
    if (fields[key].trim() === "") {
      console.log(key);
      throw `${key} required`;
    }
  }
};
// get value function
export const getValue = ({
  obj,
  path,
  defaultValue,
}: {
  obj: [];
  path: string[];
  defaultValue: [];
}) => {
  try {
    if (!(obj instanceof Array)) {
      let myValue = obj;
      for (let key of path) {
        if (!(key in myValue)) {
          return defaultValue;
        } else {
          myValue = myValue[key];
        }
      }
      return myValue;
    }
  } catch (error) {
    return defaultValue;
  }
};

//  truncate text
export const truncateText = ({ text, maxLength }: truncateTextT): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
// first name extractor
export function firstWordExtractor({ str }: firstWordExtractorT): string {
  // Trim any leading or trailing whitespace
  str = str.trim();
  // Split the string by spaces and return the first word
  const firstWord = str.split(" ")[0];
  return firstWord;
}



 
