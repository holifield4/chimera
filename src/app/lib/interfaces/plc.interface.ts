export interface PlcControlInterface {
    DeviceName: string;
    Gateway: string;
    CommandTag: string | null;
    StatusTag: string | null;
    DataTag: string | null;
    Download: boolean;
    PLCType: string;
    CPName: string | null;
    Message: string;
    TimeSync: boolean;
}