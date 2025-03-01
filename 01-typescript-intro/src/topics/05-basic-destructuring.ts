
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'The Best Song',
    details: {
        author: 'Eminem',
        year: 2021
    }

}

const {audioVolume, songDuration} = audioPlayer;
console.log(audioVolume, songDuration);





export {}