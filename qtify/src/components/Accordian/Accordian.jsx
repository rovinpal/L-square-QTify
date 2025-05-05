import { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./Accordian.module.css";

const Accordions = () => {
  const [expanded, setExpanded] = useState(false);
  const [faqData, setFaqData] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("https://qtify-backend-labs.crio.do/faq");
        const result = await response.json();
        setFaqData(result.data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);


  return (
    <div className={styles.accordionContainer}>
      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ minHeight: "80px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#34C94B" }}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor: "#121212" ,
            border: "1px solid #FFFFFF",
            borderRadius: expanded === 'panel1' ? "8px 8px 0 0" : "8px",
            height: "80px",
          }}
        >
          <Typography component="span" sx={{ width: '100%', flexShrink: 0, color: "#FFFFFF"}}>
            Is QTify free to use?
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ border: "1px solid #FFFFFF", borderRadius: "0 0 8px 8px" }}>
          <Typography >
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ minHeight: "80px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#34C94B" }}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            backgroundColor: "#121212" ,
            border: "1px solid #FFFFFF",
            borderRadius: "8px",
            height: "80px",
          }}
        >
          <Typography component="span" sx={{ width: '100%', flexShrink: 0, color: "#FFFFFF" }}>
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ border: "1px solid #FFFFFF", borderRadius: "0 0 8px 8px" }}>
          <Typography>
            Yes! You can listen to songs offline!
          </Typography>
        </AccordionDetails>
      </Accordion> */}

{faqData.map((faq, index) => {
        const panelId = `panel${index}`;
        return (
          <Accordion
            key={index}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={{ minHeight: "80px", marginBottom: "16px", border: "none", boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#34C94B" }} />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                backgroundColor: "#121212",
                border: "1px solid #FFFFFF",
                borderRadius: expanded === panelId ? "8px 8px 0 0" : "8px",
                height: "80px",
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                  alignItems: 'center',
                  height: '80px',
                },
                '&.Mui-expanded': {
                  minHeight: "80px",
                  height: "80px",
                }
              }}
            >
              <Typography component="span" sx={{ width: "100%", flexShrink: 0, color: "#FFFFFF" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "1px solid #FFFFFF",
                borderTop: "none",
                borderRadius: "0 0 8px 8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#121212" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}


export default Accordions;