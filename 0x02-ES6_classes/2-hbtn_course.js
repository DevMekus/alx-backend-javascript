/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name -  the course.
   * @param {Number} length -  long the course is (in months).
   * @param {String[]} students -  names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   *  name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   *  name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   *  length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   *  length of this course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   *  names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
