import PropTypes from 'prop-types';

const profile = PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.shape({
        username: PropTypes.string,
        domain: PropTypes.string
    })
});

const experience = PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    }))
});

const skill = PropTypes.shape({
    key: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string)
});

const socialProfile = PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string
});

const data = PropTypes.shape({
    profile: profile,
    education: PropTypes.arrayOf(experience),
    experience: PropTypes.arrayOf(experience),
    projects: PropTypes.arrayOf(experience),
    skills: PropTypes.arrayOf(skill),
    socialProfiles: PropTypes.arrayOf(socialProfile)
});

export default {
    data: data,
    profile: profile,
    experience: experience,
    skill: skill,
    socialProfile: socialProfile,
};