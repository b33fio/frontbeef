export const CHANNELS = [
    {
        "channel_name": "Programming",
        "channel_id": 1,
    },
    {
        "channel_name": "Politics",
        "channel_id": 2,
    }
];

export const DEBATES = [
    {
        "debate_id": 1,
        "debate_title": "Vim is better than emacs",
        "debate_url": "/debates/1",
        "opponent_id": 1,
        "proponent_id": 2,
        "channel_id": 1,
        "channel_name": "Programming",
        "create_date": 4382108430,
        "update_date": 4480932082,
        "views": 2000,
        "up_votes": 500,
        "down_votes": 123
     }
];

export const POINTS = [
    {
        "point_id": 1,
        "point_text": "Vim is lightweight, emacs is bloated",
        "debate_id": 1,
        "user_id": 1,
        "up_votes": 10,
        "down_votes": 11
    }
]

export const USERS = [
	{
		"username": "user1",
        "pass": "password",
		"name": "Mark Fontenot",
		"email": "mfontenot@smu.edu",
		"birthday": "01/01/1970",
		"phone": "123-456-7890",
	}
]
