export interface EqpReservationInterface {
    id: number;
  BookSNo: string;
  RecordSource: string;
  Equipment: string;
  ActState: boolean;
  ActTime: Date;
  DeactTime: Date;
  CardEnable: boolean;
  Init: boolean;
}
