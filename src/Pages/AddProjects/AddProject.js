import React, { useState } from 'react';

const AddProject = () => {
    const [projectData, setProjectData] = useState({
        projectName: '',
        startDate: '',
        endDate: '',
        problemFaced: '',
        solution: '',
        imageLinks: [''],
        projectDetails: ['']
    });

    const handleInputChange = (e) => {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        });
    };

    const handleDynamicInputChange = (index, field, value) => {
        const newData = { ...projectData };
        if (field === 'imageLinks') {
            newData.imageLinks[index] = value;
        } else if (field === 'projectDetails') {
            newData.projectDetails[index] = value;
        }
        setProjectData(newData);
    };

    const handleAddField = (field) => {
        const newData = { ...projectData };
        if (field === 'imageLinks') {
            newData.imageLinks.push('');
        } else if (field === 'projectDetails') {
            newData.projectDetails.push('');
        }
        setProjectData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/add-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Assuming you want to reset the form after successful submission
            setProjectData({
                projectName: '',
                startDate: '',
                endDate: '',
                problemFaced: '',
                solution: '',
                imageLinks: [''],
                projectDetails: ['']
            });

            console.log('Project added successfully');
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 min-h-screen rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Add Project</h1>
            <form onSubmit={handleSubmit}>
                {/* Fixed fields */}
                <input
                    type="text"
                    name="projectName"
                    placeholder="Project Name"
                    value={projectData.projectName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <br />
                <input
                    type="date"
                    name="startDate"
                    value={projectData.startDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <br />
                <input
                    type="date"
                    name="endDate"
                    value={projectData.endDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <br />
                <textarea
                    name="problemFaced"
                    placeholder="What problems did you face?"
                    value={projectData.problemFaced}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <br />
                <textarea
                    name="solution"
                    placeholder="How did you solve them?"
                    value={projectData.solution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <br />

                {/* Dynamic fields for image links */}
                {projectData.imageLinks.map((link, index) => (
                    <div key={`image-${index}`}>
                        <input
                            type="text"
                            placeholder="Image Link"
                            value={link}
                            onChange={(e) => handleDynamicInputChange(index, 'imageLinks', e.target.value)}
                            required
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        {index === projectData.imageLinks.length - 1 && (
                            <button
                                type="button"
                                onClick={() => handleAddField('imageLinks')}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                            >
                                + Add Image Link
                            </button>
                        )}
                        <br />
                    </div>
                ))}

                {/* Dynamic fields for project details */}
                {projectData.projectDetails.map((detail, index) => (
                    <div key={`detail-${index}`}>
                        <textarea
                            placeholder="Project Detail (Bullet Point)"
                            value={detail}
                            onChange={(e) => handleDynamicInputChange(index, 'projectDetails', e.target.value)}
                            required
                            className="w-full mt-5 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        {index === projectData.projectDetails.length - 1 && (
                            <button
                                type="button"
                                onClick={() => handleAddField('projectDetails')}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                            >
                                + Add Project Detail
                            </button>
                        )}
                        <br />
                    </div>
                ))}

                {/* Submit button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mt-5"
                >
                    Submit Project
                </button>
            </form>
        </div>
    );
};

export default AddProject;
