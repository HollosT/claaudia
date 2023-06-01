const CloseIcon: React.FC<{onClick: () => void}> = ({onClick}) => {

    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="close-icon" onClick={onClick}>
            <circle cx="20" cy="20" r="20" fill="#EBEBEF" />
            <path d="M23.8789 19.2506L20.3862 15.7579L21.4468 14.6973L26.7502 20.0006L21.4468 25.3038L20.3862 24.2432L23.8789 20.7506L17 20.7507L16.9999 19.2507L23.8789 19.2506ZM14 25.2505V14.7505H15.5V25.2505H14Z" />
        </svg>

    )
}

export default CloseIcon;