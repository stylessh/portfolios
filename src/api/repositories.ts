import axios from "axios";

export const getRepositories = async (): Promise<any> => {
    const { data } = await axios.get(
        "https://api.github.com/users/stylessh/repos?per_page=50"
    );

    return data;
};
