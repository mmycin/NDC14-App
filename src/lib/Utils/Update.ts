import axios from "axios";

interface Version {
    version: string;
    url: string;
}

export default async function CheckForUpdates() {
    if(!localStorage.getItem("version")) {
        localStorage.setItem("version", "2.0.0");
    }
    const currentVersion = localStorage.getItem("version") || "2.0.0";
    const versionURL =
        "https://plural-ahead.pockethost.io/api/collections/ndcapp/records/i4kbkeaa5zofe7d";

    try {
        if (versionURL) {
            const response = await axios.get(versionURL);
            const { version, url }: Version = response.data.App;

            if (version !== currentVersion) {
                // Show custom update modal
                showUpdateModal(url, version);
            }
            console.log("Version data:", version, url);
        } else {
            console.error("Version URL is undefined");
        }
    } catch (error) {
        console.error("Error fetching version:", error);
    }
}

const showUpdateModal = (apkUrl: string, version: string) => {
    // Create modal elements dynamically
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>A New Version is Available!</h2>
            <p>Version ${version} is now available. Would you like to update to the latest version?</p>
            <div class="modal-actions">
                <button id="updateButton">Update</button>
                <button id="closeButton">Later</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Style modal
    const style = document.createElement('style');
    style.textContent = `
        /* Dark Theme Modal */
        .modal {
            display: block;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            animation: fadeIn 0.4s forwards;
        }

        .modal-content {
            background-color: #333;
            color: #fff;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            max-width: 500px;
            width: 85%;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.4s ease-out;
        }

        .modal h2 {
            font-size: 28px;
            margin-bottom: 20px;
            font-family: 'Roboto', sans-serif;
        }

        .modal p {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 30px;
            font-family: 'Roboto', sans-serif;
        }

        .modal-actions {
            display: flex;
            justify-content: space-between;
            gap: 25px;
            flex-wrap: wrap;
        }

        .modal-actions button {
            padding: 15px 30px;
            background: linear-gradient(45deg, #007bff, #00d4ff);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-family: 'Roboto', sans-serif;
            transition: background-color 0.3s, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            flex: 1 1 40%;
            max-width: 200px;
        }

        .modal-actions button:hover {
            background-color: #0056b3;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: scale(1.05);
        }

        .modal-actions button:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);
        }

        /* Fade-in Animation */
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* Slide-in Animation */
        @keyframes slideIn {
            0% { transform: translateY(-40px); }
            100% { transform: translateY(0); }
        }

        /* Mobile responsiveness */
        @media (max-width: 600px) {
            .modal-content {
                width: 90%;
                padding: 25px;
            }

            .modal h2 {
                font-size: 24px;
            }

            .modal p {
                font-size: 16px;
                line-height: 1.4;
            }

            .modal-actions button {
                font-size: 16px;
                padding: 12px 20px;
            }
        }

        /* Additional custom styling */
        body {
            font-family: 'Roboto', sans-serif;
        }

        h2, p {
            text-align: center;
        }

        .modal-actions button:active {
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);

    // Get buttons and add event listeners
    const updateButton = modal.querySelector('#updateButton') as HTMLButtonElement;
    const closeButton = modal.querySelector('#closeButton') as HTMLButtonElement;

    // Update button functionality
    updateButton.onclick = async () => {
        await downloadAndInstallApk(apkUrl, version);
        closeModal(modal); // Close the modal after clicking update
    };

    // Later button functionality (close the modal)
    closeButton.onclick = () => {
        closeModal(modal); // Close the modal
    };
};

// Function to close the modal
const closeModal = (modal: HTMLElement) => {
    document.body.removeChild(modal);
};

// Function to handle downloading the APK
const downloadAndInstallApk = async (apkUrl: string, version: string) => {
    try {
        // Directly open the APK URL in the browser for download
        localStorage.setItem("version", version);
        const downloadWindow = window.open(apkUrl, "_blank");

        if (downloadWindow) {
            console.log("APK download started in a new tab.");
        } else {
            console.error("Failed to open download window.");
        }
    } catch (error) {
        console.error("Failed to download or install APK:", error);
    }
};
