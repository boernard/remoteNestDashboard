function createHtmlTable(data) {
  if (!data || !Array.isArray(data) || data.length === 0) return 'No data available'

  const columns = ['type', 'accomodation', 'ppl', 'event_date', 'name', 'contact']
  const headerRow = ['Type', 'Room', 'Pax', 'Date', 'Name', 'Contact']
    .map((column) => `<th>${column}</th>`)
    .join('')
  const bodyRows =
    data
      .map(
        (row) =>
          `<tr>${columns
            .map((column) => {
              const className =
                column === 'type' || column === 'accomodation' ? ` class="${row[column]}"` : ''
              return `<td${className}>${row[column]}</td>`
            })
            .join('')}</tr>`
      )
      .join('') + '\n'

  return `<table><thead><tr>${headerRow}</tr></thead><tbody>${bodyRows}</tbody></table>${htmlEnd}`
}

const htmlHeader = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Remote Nest Dashboard</title>
    <link rel="stylesheet" href="style.css" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Cache-Control" content="max-age=43200" />
  </head>
  <body>`
const htmlEnd = `</body></html>`

const tableContent = createHtmlTable(fetchBookings.data)
const lastUpdated = `<p>Last updated: ${new Date().toLocaleString()}</p>`
const htmlContent = `${htmlHeader}${lastUpdated}${tableContent}${htmlEnd}`

return htmlContent
