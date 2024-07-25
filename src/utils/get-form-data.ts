export const getFormData = (payload: Partial<any>): FormData => {
    const formData = new FormData();

    Object.entries(payload).map(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
};
