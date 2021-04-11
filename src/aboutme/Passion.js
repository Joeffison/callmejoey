import {faHandSpock} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Passion = () => (
  <div>
    <h2>
      Hi, Joey here! <FontAwesomeIcon  icon={faHandSpock} />
    </h2>
    {/*
    Talking about Programing is nostalgic for me.
    */}
    <p className="text-justify">
      I was 16yo when I learned my first Programming Language: Pascal.
      On a Wednesday afternoon, sunny (as always), I had just come back from school and had to have lunch quickly and head back.
      I was going to learn how to hack computers! Wow! And maybe even create some fun programs!!
      3 of my classmates were also there. We stared to that blue screen with white and yellow text. I was in awe!
      We could use some funny words to make the computer do stuff we wanted. Math? Of course!
      A <strong>revolutionary</strong> contact book? easy-peasy!!
    </p>
    <p className="text-justify">
      How could I not love Computer Science?
      I love it. I love creating things with text, and those things be used to have fun or even create jobs!
      And I love meeting those many great professors and smart colleagues that keep teaching and challenging me!
      It is my rice and beans.
    </p>
  </div>
)

export default Passion;
