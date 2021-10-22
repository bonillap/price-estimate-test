<script>
	import PriceEstimate from "price-estimate";
	import {data} from "./data/sample"

	const mail = "http://api.mailing.com/processEstimate";
</script>

<main>
	<PriceEstimate data={data} mailingURL={mail}></PriceEstimate>
</main>

