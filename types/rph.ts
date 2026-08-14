export type RPH = {
  id?: string; date: string; day: string; academicWeek: number; subject: string; className: string;
  startTime: string; endTime: string; duration: number; theme: string; topic: string;
  standardContent: string; learningStandard: string; performanceStandard: string;
  objectives: string[]; successCriteria: string[];
  activities: { setInduksi: string; langkah1: string; langkah2: string; langkah3: string; pengayaan: string; pemulihan: string; penutup: string };
  strategy: string; pak21: string; kbat: string; emk: string; values: string; materials: string; assessment: string; reflection: string;
  status?: 'draft' | 'complete' | 'review'; qualityScore?: number;
}
