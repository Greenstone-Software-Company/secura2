import React from 'react';
import styles from './Calendar.module.css';
import { useSession } from 'next-auth/react';
import GoogleCalendarEvents from './GoogleCalendarEvents';
import MicrosoftCalendarEvents from './MicrosoftCalendarIntegration';

const Calendar: React.FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Please sign in to view your calendar events.</p>;
  }

  return (
    <div className={styles.calendar}>
      <h2>Your Upcoming Meetings</h2>
      <div className={styles.month}>January</div>
      <div className={styles.days}>
        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
        <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
        <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
        <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
        <span>29</span><span>30</span><span>31</span>
      </div>
      <GoogleCalendarEvents />
      <MicrosoftCalendarEvents />
    </div>
  );
};

export default Calendar;
