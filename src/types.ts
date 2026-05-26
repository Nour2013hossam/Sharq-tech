export type Field = {
  id: string;
  title: string;
  description: string;
  iconName: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  skills: string[];
};

export type Competition = {
  id: string;
  title: string;
  deadline: string;
  status: 'Open' | 'Closed' | 'Upcoming';
  participants: number;
  prize: string;
};

export type Course = {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
};
