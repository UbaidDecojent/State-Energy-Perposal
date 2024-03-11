function fetchProposalData(meetingId) {
    const apiUrl = `https://avaya.mystateenergy.com/api/v1/get_proposal_data?meeting_id=${meetingId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Do something with the fetched data
            console.log(data.address);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    // Example usage:
    fetchProposalData(1);