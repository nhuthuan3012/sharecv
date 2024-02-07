export const TabTextStyle = (isFocus: boolean) => {
    return {
        color: "#063776",
        fontFamily: "Montserrat",
        fontSize: "22px",
        fontStyle: "normal",
        fontWeight: isFocus ? 700 : 400,
        lineHeight: "normal",
        textTransform: "uppercase",
    }
}

export const TabButtonStyle = () => {
    return {
        padding: "5px",
        borderRadius: '5px',
        backgroundColor: 'transparent',
        color: 'inherit',
        '&:hover': {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        cursor: 'pointer',
    }
}

export const paginationTextStyles = () => {
    return {
        color: "#063776",
        fontFamily: "Montserrat",
        fontSize: "22px",
        fontStyle: "normal",
        fontWeight: 400,
    }
}