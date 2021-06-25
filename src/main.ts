// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2,
// };

// console.log(statuses.inProgress);

enum StatusEnum {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Done = 'Done',
}

interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);
