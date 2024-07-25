export const checkErrorMessage = (errors?: any) => {
    if (!Object.keys(errors).length) {
        return;
    }

    const newArray = Object.values(errors);
    // @ts-ignore
    return newArray[0].message;
};
