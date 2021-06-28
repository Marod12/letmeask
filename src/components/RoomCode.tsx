import copyImg from '../assets/images/copy.svg';
import toast from 'react-hot-toast';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        const myPromise = navigator.clipboard.writeText(props.code)
        return (
            toast.promise(
                myPromise,
                {
                    loading: 'Saving...',
                    success: <>Copiado com sucesso!</>,
                    error: <>Erro ao cópiar código.</>,
                }
            )
        )
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}