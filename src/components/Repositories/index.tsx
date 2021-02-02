import React, { useEffect, useState } from "react";

import { getRepositories } from "@Api/repositories";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import langColors from '@Utils/getLangColor';

const Repositories = () => {
    const [repos, setRepos] = useState<any>([]);

    useEffect(() => {
        const getData = async () => {
            const repos = await getRepositories();

            console.log(repos[0])

            setRepos(repos);
        };

        getData();
    }, []);


    useEffect(() => {

    }, [])

    return (
        <div className="repositories">
            {repos &&
                repos.map((repo) => (
                    <a href={repo.svn_url} target="_blank" className="repo" key={repo.id}>
                        <div className="info">
                            <h3 className="name">{repo.name}</h3>

                            <p className="description">{repo.description}</p>
                        </div>

                        <div className="stats">
                            <div className="counts">
                                <div className="stars">
                                    <FaStar /> {repo.stargazers_count}
                                </div>

                                <div className="forks">
                                    <FaCodeBranch /> {repo.forks}
                                </div>
                            </div>

                            <h4 className="lang"> <span className="color" style={{ background: langColors[repo.language] }}></span> {repo.language}</h4>
                        </div>
                    </a>
                ))}
        </div>
    );
};

export default Repositories;
