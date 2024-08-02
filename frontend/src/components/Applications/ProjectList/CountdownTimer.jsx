import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const endDate = new Date(deadline);
        const timeLeft = endDate - now;

        if (timeLeft <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds, expired: false };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {timeLeft.expired ? (
                <span>Дедлайн прошел</span>
            ) : (
                <>
                    <span>{timeLeft.days}d </span>
                    <span>{timeLeft.hours}h </span>
                    <span>{timeLeft.minutes}m </span>
                    <span>{timeLeft.seconds}s</span>
                </>
            )}
        </div>
    );
};

export default CountdownTimer;
